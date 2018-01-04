package xyy.fin.mapper.ext;

import java.util.Date;
import java.util.List;
import java.util.Map;

import xyy.fin.model.FinMonthlySnapModel;

public interface FinMonthlySnapModelExtMapper {
	List<String> selectDistinctItem();
	List<Date> selectDistinctMonth();
	List<FinMonthlySnapModel> selectByMonth(Map month);
	Integer insertMonthlySnap(Map prop);
}