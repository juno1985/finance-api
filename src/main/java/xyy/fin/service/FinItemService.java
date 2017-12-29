package xyy.fin.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Transactional;

import xyy.fin.enums.ItemType;
import xyy.fin.mapper.FinChgHistModelMapper;
import xyy.fin.mapper.FinItemModelMapper;
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
	
	//得到相应的项目, itemType=property/input/output
	public List<FinItemModel> getAllItems(String itemType){
		FinItemModelExample finExa = new FinItemModelExample();
		FinItemModelExample.Criteria finCri = finExa.createCriteria(); 
		finCri.andItemTypeEqualTo(itemType);
		List<FinItemModel> itemList= finItemModelMapper.selectByExample(finExa);
		return itemList;
	}
	
	//添加收入流历史
	public void addInputFlowHist(InputPostModel inputPostModel){
		
	}
	

}
