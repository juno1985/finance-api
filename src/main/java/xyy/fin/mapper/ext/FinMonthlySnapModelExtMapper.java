package xyy.fin.mapper.ext;

import java.util.Date;
import java.util.List;

public interface FinMonthlySnapModelExtMapper {
	List<String> selectDistinctItem();
	List<Date> selectDistinctMonth();
}