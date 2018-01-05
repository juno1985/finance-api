package xyy.fin.controller;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import xyy.fin.model.FinItemModel;
import xyy.fin.service.FinItemService;
import xyy.fin.service.MailService;

@RestController
public class EmailController {
	
	@Autowired
	private MailService mailService;
	
	@Autowired
	private FinItemService finItemService;

	@RequestMapping(value = { "/sendMail" }, method = { RequestMethod.GET })
	public void sendEmail(){
		
		List<FinItemModel> finList = finItemService.getPropDatas();
		
		Date dt = new Date();
		SimpleDateFormat formatter;
		formatter = new SimpleDateFormat ("yyyy-MM");
		String month = formatter.format(dt);
		
		StringBuffer sb = new StringBuffer();
		sb.append("<h3>"+month+"月度报告</h3>");
		sb.append("<table border='1' cellspacing='0'>");
		for(FinItemModel fin :finList){
			sb.append("<tr><td>"+fin.getItemName()+"</td><td>"+fin.getItemBalance()+"元</td><tr>");
		}
		sb.append("</table>");
		sb.append("<p>来自老坛儿程序的自动邮件~~</p>");
		mailService.sendHtmlMail("wangzhen_tju@126.com", 
				"小玥玥理财月度报告", sb.toString());
		
		System.out.println("----------------------->");
	}
}
