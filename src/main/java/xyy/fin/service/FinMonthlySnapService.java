package xyy.fin.service;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Transactional;

import xyy.fin.mapper.FinMonthlySnapModelMapper;
import xyy.fin.mapper.ext.FinMonthlySnapModelExtMapper;
import xyy.fin.model.FinMonthlySnapModel;
import xyy.fin.model.FinMonthlySnapModelExample;
import xyy.fin.model.ext.Legend;
import xyy.fin.model.ext.PieChartModel;
import xyy.fin.model.ext.SnapItemModel;
import xyy.fin.model.ext.XAxis;

@Transactional(value = "transactionManager", rollbackFor = Exception.class, 
isolation = Isolation.READ_COMMITTED, timeout = 300)
@Service
public class FinMonthlySnapService {
	
	@Autowired
	private FinMonthlySnapModelExtMapper finMonthlySnapModelMapperExt;
	@Autowired
	private FinMonthlySnapModelMapper finMonthlySnapModelMapper;

	public List<String> getDistinctItems(){
		List<String> distinctItems = finMonthlySnapModelMapperExt.selectDistinctItem();
		return distinctItems;
	}
	
	//得到格式yyyy-MM的snap日期集合
	public List<String> getDistinctDate(){
		List<String> monList = new ArrayList<String>();
		SimpleDateFormat formatter;
		formatter = new SimpleDateFormat ("yyyy-MM"); 
		List<Date> distinctDate = finMonthlySnapModelMapperExt.selectDistinctMonth();
		for(Date dt : distinctDate)
		{
			if(!monList.contains(formatter.format(dt)))
				monList.add(formatter.format(dt));
		}
		return monList;
	}
	
	public PieChartModel compSnapModel(){
	
		List<String> distMonth = getDistinctDate();
		//横坐标月份数
		int distMonthNum = distMonth.size();
		//String->资产名
		Map<String, SnapItemModel> snapItemMap = new HashMap<>();
		
		SimpleDateFormat formatter;
		formatter = new SimpleDateFormat ("yyyy-MM"); 
		
		FinMonthlySnapModelExample snapExa = new FinMonthlySnapModelExample();
		snapExa.setOrderByClause("snap_item");
		List<FinMonthlySnapModel> snapModelList = finMonthlySnapModelMapper.selectByExample(snapExa);
		
		
		for(FinMonthlySnapModel sm:snapModelList){
			//在横坐标月份数组的对应下标
			int monIndex = distMonth.indexOf(formatter.format(sm.getSnapTime()));
			//资产项名称
			String itemName = sm.getSnapItem();
			if(!snapItemMap.containsKey(itemName)){
				SnapItemModel snapModel = new SnapItemModel(itemName, "line", "总量", distMonthNum);
				snapModel.getData()[monIndex] = sm.getSnapBalance();
				snapItemMap.put(itemName, snapModel);
			
			}else{
				snapItemMap.get(itemName).getData()[monIndex] = sm.getSnapBalance();
			}
			
		}
		
		
		//类别栏
		Legend legend = new Legend();
		legend.setData(getDistinctItems());
		//横坐标栏
		XAxis xAxis = new XAxis();
		xAxis.setType("category");
		xAxis.setBoundaryGap(false);
		xAxis.setData(distMonth);
		
		PieChartModel pieChartModel = new PieChartModel();
		pieChartModel.setLegend(legend);
		pieChartModel.getxAxis().add(xAxis);
		
		
		//将null设为0
		Set<String> propNameSet = snapItemMap.keySet();
		for(String propName : propNameSet){
			SnapItemModel sModel = snapItemMap.get(propName);
			
			for(int i = 0; i < sModel.getData().length; i++){
				if (sModel.getData()[i]==null)
					sModel.getData()[i]=(long) 0;
			}
			
			pieChartModel.getSeries().add(sModel);
		}
		
		return pieChartModel;
	}
}
