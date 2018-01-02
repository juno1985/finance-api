package xyy.fin.controller;

import java.util.List;

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
	//生成财务收入的收入来源和目的账户
	@RequestMapping(value = { "/getInputFlow" }, method = { RequestMethod.GET })
	public ResponseEntity<ItemsWrappedModel> getInputDataFlow(){
		ItemsWrappedModel<FinItemModel,FinItemModel> itemWrapped = finItemService.getInputDataFlow();
		return new ResponseEntity<>(itemWrapped,HttpStatus.OK);
	}
	//处理财务收入的表单提交
	@RequestMapping(value = {"/postInputFlow"}, method = {RequestMethod.POST})
	public ResponseEntity<AjaxModel> receiveInputFlow(@RequestBody InputPostModel inputPostModel){
		
		finItemService.saveInputFlow(inputPostModel);
		
		AjaxModel am = new AjaxModel(0,"收入添加成功!");
		
		return new ResponseEntity<>(am,HttpStatus.OK);
	}
	//生成财务支出的支出账户和支出类别
	@RequestMapping(value = { "/getOutputFlow" }, method = { RequestMethod.GET })
	public ResponseEntity<ItemsWrappedModel> getOutputDataFlow(){
		ItemsWrappedModel<FinItemModel,FinItemModel> itemWrapped = finItemService.getOutputDataFlow();
		return new ResponseEntity<>(itemWrapped,HttpStatus.OK);
	}
	//处理财务收入的表单提交
	@RequestMapping(value = {"/postOutputFlow"}, method = {RequestMethod.POST})
	public ResponseEntity<AjaxModel> receiveOutputFlow(@RequestBody InputPostModel inputPostModel){
			
		finItemService.saveOutputFlow(inputPostModel);
			
		AjaxModel am = new AjaxModel(0,"支出添加成功!");
			
		return new ResponseEntity<>(am,HttpStatus.OK);
	}
	
	@RequestMapping(value = { "/PropReorgFlow" }, method = { RequestMethod.GET })
	public ResponseEntity<ItemsWrappedModel> getPropReorgFlow(){
		ItemsWrappedModel<FinItemModel,FinItemModel> itemWrapped = finItemService.getPropReorgFlow();
		return new ResponseEntity<>(itemWrapped,HttpStatus.OK);
	}

	@RequestMapping(value = {"/postPropReorgFlow"}, method = {RequestMethod.POST})
	public ResponseEntity<AjaxModel> receivePropReorgFlow(@RequestBody InputPostModel inputPostModel){
			
		finItemService.savePropReorgFlow(inputPostModel);
			
		AjaxModel am = new AjaxModel(0,"重组添加成功!");
			
		return new ResponseEntity<>(am,HttpStatus.OK);
	}
	
	//资产情况表数据获取
	@RequestMapping(value = { "/prodatas" }, method = { RequestMethod.GET})
	public ResponseEntity<List<FinItemModel>> getPropDatas(){
		List<FinItemModel> propsList = finItemService.getPropDatas();
		
		return new ResponseEntity<>(propsList, HttpStatus.OK);
	}
	
	@RequestMapping(value={"/getTotal"},method={RequestMethod.GET})
	public ResponseEntity<Long> getPropTotal(){
		return new ResponseEntity<>(finItemService.getPropTotal(),HttpStatus.OK);
	}
}
