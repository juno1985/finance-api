package xyy.fin.mapper;

import java.util.List;
import org.apache.ibatis.annotations.Param;
import xyy.fin.model.FinItemModel;
import xyy.fin.model.FinItemModelExample;

public interface FinItemModelMapper {
    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table fin_items
     *
     * @mbg.generated Thu Dec 28 11:31:17 CST 2017
     */
    long countByExample(FinItemModelExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table fin_items
     *
     * @mbg.generated Thu Dec 28 11:31:17 CST 2017
     */
    int deleteByExample(FinItemModelExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table fin_items
     *
     * @mbg.generated Thu Dec 28 11:31:17 CST 2017
     */
    int deleteByPrimaryKey(Integer id);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table fin_items
     *
     * @mbg.generated Thu Dec 28 11:31:17 CST 2017
     */
    int insert(FinItemModel record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table fin_items
     *
     * @mbg.generated Thu Dec 28 11:31:17 CST 2017
     */
    int insertSelective(FinItemModel record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table fin_items
     *
     * @mbg.generated Thu Dec 28 11:31:17 CST 2017
     */
    List<FinItemModel> selectByExample(FinItemModelExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table fin_items
     *
     * @mbg.generated Thu Dec 28 11:31:17 CST 2017
     */
    FinItemModel selectByPrimaryKey(Integer id);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table fin_items
     *
     * @mbg.generated Thu Dec 28 11:31:17 CST 2017
     */
    int updateByExampleSelective(@Param("record") FinItemModel record, @Param("example") FinItemModelExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table fin_items
     *
     * @mbg.generated Thu Dec 28 11:31:17 CST 2017
     */
    int updateByExample(@Param("record") FinItemModel record, @Param("example") FinItemModelExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table fin_items
     *
     * @mbg.generated Thu Dec 28 11:31:17 CST 2017
     */
    int updateByPrimaryKeySelective(FinItemModel record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table fin_items
     *
     * @mbg.generated Thu Dec 28 11:31:17 CST 2017
     */
    int updateByPrimaryKey(FinItemModel record);
}