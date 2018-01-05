package xyy.fin;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import xyy.fin.service.FinMonthlySnapService;
import xyy.fin.service.MailService;

@Component
public class ScheduledJobs {
	@Autowired
	private FinMonthlySnapService finMonthlySnapService;
	@Autowired
	private MailService mailService;
	/**
		 * * 第一位，表示秒，取值0-59
		* 第二位，表示分，取值0-59
		* 第三位，表示小时，取值0-23
		* 第四位，日期天/日，取值1-31
		* 第五位，日期月份，取值1-12
		* 第六位，星期，取值1-7，星期一，星期二...，注：不是第1周，第二周的意思
		          另外：1表示星期天，2表示星期一。
		* 第7为，年份，可以留空，取值1970-2099
	*/
	@Scheduled(cron="0 0 0-23 20-31 * ?")
	public void exeMonthSnap(){
		System.out.println("MontlySnap任务监测时间----------> " + new Date());
		Integer rows = finMonthlySnapService.checkMonthSnapExist();
		if(rows>0){
			System.out.println("当前月份已被抓拍,不会产生新的snap数据!");
		}else{
			finMonthlySnapService.insertMonthSnap();
			System.out.println("新月份数据产生,注意查看snap堆叠图!");
		}
		
//		StringBuffer sb = new StringBuffer();
//		sb.append("<h1>大标题-h1</h1>")
//        .append("<p style='color:#F00'>红色字</p>")
//        .append("<p style='text-align:right'>右对齐</p>");
//		
//		mailService.sendHtmlMail("390380730@qq.com", "wangzhen_tju@126.com", 
//				"月度报告", sb.toString());
//		
//		System.out.println("----------------------->");
	}
	
	
	
}
