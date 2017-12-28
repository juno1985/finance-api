package xyy.fin.enums;

public enum ItemType implements EnumType {

	PROPERTY("property"),
	INPUT("input"),
	OUTPUT("output");
	
	public final String code;

	
	private ItemType(String code) {
		this.code = code;
	}


	@Override
	public String getCode() {
		return this.code;
	}
	
	
}
