package xyy.fin;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.web.HttpMessageConverters;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.web.client.RestTemplate;
import com.alibaba.fastjson.serializer.SerializerFeature;
import com.alibaba.fastjson.support.config.FastJsonConfig;
import com.alibaba.fastjson.support.spring.FastJsonHttpMessageConverter;
//启用spring定时任务
@EnableScheduling
@SpringBootApplication
public class FinApiApplication {

	@Autowired
    private RestTemplateBuilder builder;

	public static void main(String[] args) {
		SpringApplication.run(FinApiApplication.class, args);
	}
	
//	用来将收到restful的json格式转化为对象
	@Bean  
    public RestTemplate restTemplate() {
        return builder.build();
    }
	
	@Bean
	public HttpMessageConverters fastjsonHttpMessageConverters() {
		FastJsonHttpMessageConverter fastConverter = new FastJsonHttpMessageConverter();
		FastJsonConfig fastJsonConfig = new FastJsonConfig();
		fastJsonConfig.setSerializerFeatures(SerializerFeature.PrettyFormat);
		fastConverter.setFastJsonConfig(fastJsonConfig);
		
		return new HttpMessageConverters(fastConverter);
		
	}

}
