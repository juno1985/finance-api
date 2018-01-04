package xyy.fin.model.ext;

public class SystemContext {

	private static ThreadLocal<Integer> pageSize = new ThreadLocal<>();

	public static Integer getPageSize() {
		return pageSize.get();
	}

	public static void setPageSize(Integer _pageSize) {
		pageSize.set(_pageSize);
	}

	public static void removePageSize() {
		pageSize.remove();
	}
	
}
