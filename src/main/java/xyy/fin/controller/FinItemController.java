package xyy.fin.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import xyy.fin.model.FinItemModel;
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
	
/*	@RequestMapping(value = { "/test" }, method = { RequestMethod.GET })
	public ResponseEntity<FinItemModel> test(FinItemModel finItemModel){
		return new ResponseEntity<>(finItemModel,HttpStatus.OK);
	}*/
}
