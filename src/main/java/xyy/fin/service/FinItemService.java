package xyy.fin.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Transactional;

import xyy.fin.mapper.FinItemModelMapper;
import xyy.fin.model.FinItemModel;

@Transactional(value = "transactionManager", rollbackFor = Exception.class, 
		isolation = Isolation.READ_COMMITTED, timeout = 300)
@Service
public class FinItemService {

	@Autowired
	private FinItemModelMapper finItemModelMapper;
	
	public void addFinItem(FinItemModel finItemModel){
		finItemModelMapper.insert(finItemModel);
	}
}
