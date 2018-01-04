package xyy.fin.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import xyy.fin.model.ext.PieChartModel;
import xyy.fin.service.FinMonthlySnapService;

@RestController
public class FinMonthlySnapController {

	@Autowired
	private FinMonthlySnapService finMonthlySnapService;
	
	@RequestMapping(value = { "/getPieChart" }, method = { RequestMethod.GET })
	public ResponseEntity<PieChartModel> getPieChart(){
//		finMonthlySnapService.getDistinctItems();
//		finMonthlySnapService.getDistinctDate();
		return new ResponseEntity<>(finMonthlySnapService.compSnapModel(),HttpStatus.OK);
	}
	
//	@RequestMapping(value = { "/addMonthSnap" }, method = { RequestMethod.GET })
//	public void insertMonthlySnap(){
//		finMonthlySnapService.checkMonthSnapExist();
//	}
}
