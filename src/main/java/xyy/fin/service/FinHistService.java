package xyy.fin.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Transactional;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;

import xyy.fin.model.ext.ChgHistExtModel;
import xyy.fin.model.ext.Pager;
import xyy.fin.model.ext.SystemContext;
import xyy.fin.mapper.ext.FinChgExtMapper;

@Transactional(value = "transactionManager", rollbackFor = Exception.class, 
isolation = Isolation.READ_COMMITTED, timeout = 300)
@Service
public class FinHistService {
	@Autowired
	private FinChgExtMapper finChgExtMapper;
	
	public Pager<ChgHistExtModel> ChgHistBrowse(Integer currentPage){
		
		Integer pageSize = SystemContext.getPageSize();
		
		//这个页数今后改成LocalThread封装
		PageHelper.startPage(currentPage, pageSize);

		List<ChgHistExtModel> chgList = finChgExtMapper.selectChgHistData();
		
		Pager<ChgHistExtModel> pager = new Pager<>();
		pager.setDatas(chgList);
		pager.setCurrentPage(currentPage);
		
//		for(ChgHistExtModel c:chgList)
//		System.out.println(c.getFromItem()+" "+c.getToItem()+""+c.getChgTime());
		PageInfo<ChgHistExtModel> pageInfo = new PageInfo<ChgHistExtModel>(chgList);
		
		pager.setTotalPage(Math.round(Math.ceil((pageInfo.getTotal()*1.0/pageSize))));

//		System.out.println("共有条数 "+pager.getTotalPage());
		
		return pager;
	}
}
