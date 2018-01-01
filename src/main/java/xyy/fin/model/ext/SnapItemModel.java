package xyy.fin.model.ext;


public class SnapItemModel {
	private String name;
	private String type;
	private String stack;
	private Long[] data;
	public SnapItemModel() {
	}
	public SnapItemModel(String name, String type, String stack, int num) {
		this.name = name;
		this.type = type;
		this.stack = stack;
		this.data = new Long[num];
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public String getStack() {
		return stack;
	}
	public void setStack(String stack) {
		this.stack = stack;
	}
	public Long[] getData() {
		return data;
	}
	public void setData(Long[] data) {
		this.data = data;
	}
	

	
}
