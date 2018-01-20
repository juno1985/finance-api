package xyy.fin.controller;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import xyy.fin.model.FinItemModel;
import xyy.fin.model.ext.AjaxModel;
import xyy.fin.service.FinItemService;
import xyy.fin.service.MailService;

@RestController
public class EmailController {
	
	@Autowired
	private MailService mailService;
	
	@Autowired
	private FinItemService finItemService;

	/**
	 * 
	 */
	@RequestMapping(value = { "/sendMail" }, method = { RequestMethod.GET })
	public ResponseEntity<AjaxModel> sendEmail(){
		
		Long propTotal = finItemService.getPropTotal();
		
		List<FinItemModel> finList = finItemService.getPropDatas();
		
		Date dt = new Date();
		SimpleDateFormat formatter;
		formatter = new SimpleDateFormat ("yyyy-MM-dd");
		String dd = formatter.format(dt);
		
		StringBuffer sb = new StringBuffer();
		sb.append("<h3>"+dd+"报告</h3>");
		sb.append("<table border='1' cellspacing='0'>");
		for(FinItemModel fin :finList){
			sb.append("<tr><td>"+fin.getItemName()+"</td><td>"+fin.getItemBalance()+"元</td></tr>");
		}
		sb.append("<tfoot><tr><td>共计</td><td>"+propTotal+"元</td></tr></tfoot>");
		sb.append("</table>");
		sb.append("<p>来自老坛儿程序的自动邮件~~</p>");
		mailService.sendHtmlMail(new String[]{"mierlady@126.com","wangzhen_tju@126.com"}, 
				"小玥玥理财报告", sb.toString());
		
		AjaxModel am = new AjaxModel(0,"邮件发送成功!");
		
		return new ResponseEntity<>(am,HttpStatus.OK);
	}
}
