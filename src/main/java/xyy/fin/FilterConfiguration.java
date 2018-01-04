package xyy.fin;

import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class FilterConfiguration {

	@Bean
    public FilterRegistrationBean filterDemo4Registration() {
        FilterRegistrationBean registration = new FilterRegistrationBean();
        //注入过滤器
        registration.setFilter(new SystemContextFilter());
        //拦截规则
        registration.addUrlPatterns("/*");
        //过滤器名称
        registration.setName("SystemContextFilter");

        registration.addInitParameter("pageSize", "15");
        System.out.println("filter参数初始化------> " + registration.getInitParameters());
        //过滤器顺序
        registration.setOrder(1);
        return registration;
    }
}
