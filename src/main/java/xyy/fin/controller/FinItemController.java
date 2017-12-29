package xyy.fin.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import xyy.fin.model.FinItemModel;
import xyy.fin.model.ext.InputPostModel;
import xyy.fin.model.ext.ItemsWrappedModel;
import xyy.fin.service.FinItemService;

@RestController
public class FinItemController {

	@Autowired
	private FinItemService finItemService;
	
	
	@RequestMapping(value = { "/finItemAdd" }, method = { RequestMethod.POST })
	public ResponseEntity<FinItemModel> addFinItem(FinItemModel finItemModel){
		finItemService.addFinItem(finItemModel);
		return new ResponseEntity<>(finItemModel,HttpStatus.OK);
	}
	
	@RequestMapping(value = { "/getInputFlow" }, method = { RequestMethod.GET })
	public ResponseEntity<ItemsWrappedModel> getInputDataFlow(){
		ItemsWrappedModel<FinItemModel,FinItemModel> itemWrapped = finItemService.getInputDataFlow();
		return new ResponseEntity<>(itemWrapped,HttpStatus.OK);
	}
	
	@RequestMapping(value = {"/postInputFlow"}, method = {RequestMethod.POST})
	public ResponseEntity receiveInputFlow(@RequestBody InputPostModel inputPostModel){
		
		System.out.println(inputPostModel);
		
		return new ResponseEntity(HttpStatus.OK);
	}

}
