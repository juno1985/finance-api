package xyy.fin.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import xyy.fin.model.FinItemModel;
import xyy.fin.model.ext.AjaxModel;
import xyy.fin.model.ext.InputPostModel;
import xyy.fin.model.ext.ItemsWrappedModel;
import xyy.fin.service.FinItemService;

@RestController
public class FinItemController {

	@Autowired
	private FinItemService finItemService;
	
	//增加fin_items数据
	@RequestMapping(value = { "/finItemAdd" }, method = { RequestMethod.POST })
	public ResponseEntity<FinItemModel> addFinItem(FinItemModel finItemModel){
		finItemService.addFinItem(finItemModel);
		return new ResponseEntity<>(finItemModel,HttpStatus.OK);
	}
	//生成财务收入的收入来源和目的啊账户
	@RequestMapping(value = { "/getInputFlow" }, method = { RequestMethod.GET })
	public ResponseEntity<ItemsWrappedModel> getInputDataFlow(){
		ItemsWrappedModel<FinItemModel,FinItemModel> itemWrapped = finItemService.getInputDataFlow();
		return new ResponseEntity<>(itemWrapped,HttpStatus.OK);
	}
	//处理财务收入的表单提交
	@RequestMapping(value = {"/postInputFlow"}, method = {RequestMethod.POST})
	public ResponseEntity<AjaxModel> receiveInputFlow(@RequestBody InputPostModel inputPostModel){
		
		finItemService.saveInputFlow(inputPostModel);
		
		AjaxModel am = new AjaxModel(0,"收入流添加成功!");
		
		return new ResponseEntity<>(am,HttpStatus.OK);
	}

}
