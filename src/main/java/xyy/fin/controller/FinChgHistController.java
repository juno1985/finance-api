package xyy.fin.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import xyy.fin.model.ext.ChgHistExtModel;
import xyy.fin.model.ext.Pager;
import xyy.fin.service.FinHistService;

@RestController
public class FinChgHistController {

	@Autowired
	private FinHistService finHistService;
	
	//增加fin_items数据
	@RequestMapping(value = { "/hist/{currentPage}" }, method = { RequestMethod.GET })
	public ResponseEntity<Pager<ChgHistExtModel>> histBrowse(@PathVariable("currentPage") Integer currentPage){
		return new ResponseEntity<>(finHistService.ChgHistBrowse(currentPage),HttpStatus.OK);
	}
}
