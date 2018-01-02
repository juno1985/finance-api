package xyy.fin.service;

import java.util.Date;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Transactional;
import xyy.fin.enums.ItemType;
import xyy.fin.mapper.FinChgHistModelMapper;
import xyy.fin.mapper.FinItemModelMapper;
import xyy.fin.model.FinChgHistModel;
import xyy.fin.model.FinItemModel;
import xyy.fin.model.FinItemModelExample;
import xyy.fin.model.ext.InputPostModel;
import xyy.fin.model.ext.ItemsWrappedModel;

@Transactional(value = "transactionManager", rollbackFor = Exception.class, 
		isolation = Isolation.READ_COMMITTED, timeout = 300)
@Service
public class FinItemService {

	@Autowired
	private FinItemModelMapper finItemModelMapper;
	
	@Autowired
	private FinChgHistModelMapper finChgHistModelMapper;
	
	public void addFinItem(FinItemModel finItemModel){
		finItemModelMapper.insert(finItemModel);
	}
	
	public ItemsWrappedModel<FinItemModel, FinItemModel> getInputDataFlow(){
		//得到所有收入项
		List<FinItemModel> fromList = getAllItems(ItemType.INPUT.getCode());
		//得到所有资产项
		List<FinItemModel> toList = getAllItems(ItemType.PROPERTY.getCode());
		
		ItemsWrappedModel<FinItemModel, FinItemModel> itemsWrapped = new ItemsWrappedModel<>(fromList, toList);
		
		return itemsWrapped;
	}
	
	public ItemsWrappedModel<FinItemModel, FinItemModel> getOutputDataFlow(){
		List<FinItemModel> fromList = getAllItems(ItemType.PROPERTY.getCode());
		List<FinItemModel> toList = getAllItems(ItemType.OUTPUT.getCode());
		
		ItemsWrappedModel<FinItemModel, FinItemModel> itemsWrapped = new ItemsWrappedModel<>(fromList, toList);
		
		return itemsWrapped;
	}
	
	//得到相应的项目, itemType=property/input/output
	public List<FinItemModel> getAllItems(String itemType){
		FinItemModelExample finExa = new FinItemModelExample();
		FinItemModelExample.Criteria finCri = finExa.createCriteria(); 
		finCri.andItemTypeEqualTo(itemType);
		List<FinItemModel> itemList= finItemModelMapper.selectByExample(finExa);
		return itemList;
	}
	
	//处理财务收入的表单提交
	public void saveInputFlow(InputPostModel inputPostModel){
		//增加收入到目的账户
		FinItemModel finItem = finItemModelMapper.selectByPrimaryKey(inputPostModel.getToItem());
		finItem.setItemBalance(finItem.getItemBalance()+inputPostModel.getTranAccount());
		finItemModelMapper.updateByPrimaryKeySelective(finItem);
		//添加收入流历史
		addInputFlowHist(inputPostModel);
		
	}
	
	//添加收入流历史
	public void addInputFlowHist(InputPostModel inputPostModel){
		FinChgHistModel chgHistItem = new FinChgHistModel();
		chgHistItem.setFromId(inputPostModel.getFromItem());
		chgHistItem.setToId(inputPostModel.getToItem());
		chgHistItem.setChgAmmount(inputPostModel.getTranAccount());
		chgHistItem.setChgComment(inputPostModel.getShortComment());
		chgHistItem.setChgTime(new Date());
		finChgHistModelMapper.insert(chgHistItem);
	}

	public void saveOutputFlow(InputPostModel inputPostModel) {
		//扣减支出账户
		FinItemModel finItem = finItemModelMapper.selectByPrimaryKey(inputPostModel.getFromItem());
		finItem.setItemBalance(finItem.getItemBalance()-inputPostModel.getTranAccount());
		finItemModelMapper.updateByPrimaryKeySelective(finItem);
		//添加收入流历史
		addInputFlowHist(inputPostModel);
		
	}
	

}
