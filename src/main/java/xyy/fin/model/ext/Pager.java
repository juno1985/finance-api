package xyy.fin.model.ext;

import java.util.List;

public class Pager<T> {

	private Long totalPage;
	private Integer currentPage;
	private List<T> datas;
	public Pager() {
	}
	public Pager(Long totalPage, Integer currentPage, List<T> datas) {
		this.totalPage = totalPage;
		this.currentPage = currentPage;
		this.datas = datas;
	}
	public Long getTotalPage() {
		return totalPage;
	}
	public void setTotalPage(Long totalPage) {
		this.totalPage = totalPage;
	}
	public Integer getCurrentPage() {
		return currentPage;
	}
	public void setCurrentPage(Integer currentPage) {
		this.currentPage = currentPage;
	}
	public List<T> getDatas() {
		return datas;
	}
	public void setDatas(List<T> datas) {
		this.datas = datas;
	}
	
	
}
