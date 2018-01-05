package xyy.fin.service;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

@Service
public class MailService {

	@Autowired
	private JavaMailSender sender;
	@Value("${spring.mail.username}")
	private String username;
	
    public void sendHtmlMail(String to, String subject, String content){  
        MimeMessage message = sender.createMimeMessage();  
  
        try {  
            //true表示需要创建一个multipart message  
            MimeMessageHelper helper = new MimeMessageHelper(message, true);  
            helper.setFrom(username);  
            helper.setTo(to);  
            helper.setSubject(subject);  
            helper.setText(content, true);  
  
            sender.send(message);  
          
            System.out.println("---------------->邮件已发送");
        } catch (MessagingException e) {  
            System.out.println("发送html邮件时发生异常！");  
        }  
    }  
}
