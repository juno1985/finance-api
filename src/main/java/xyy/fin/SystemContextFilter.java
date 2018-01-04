package xyy.fin;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;

import xyy.fin.model.ext.SystemContext;

public class SystemContextFilter implements Filter {

	private Integer pageSize;
	
	@Override
	public void init(FilterConfig filterConfig) throws ServletException {

		try {
			pageSize = Integer.parseInt(filterConfig.getInitParameter("pageSize"));
		} catch (NumberFormatException e) {
			//设置页面条数为15
			pageSize = 15;
		}
	}

	@Override
	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
			throws IOException, ServletException {

		try {
			SystemContext.setPageSize(pageSize);
			chain.doFilter(request,response);
		} finally {
			SystemContext.removePageSize();
		}
	}

	@Override
	public void destroy() {
		// TODO Auto-generated method stub

	}

}
