package xyy.fin.model.ext;

public class AjaxModel {

	//0-成功 1-失败
	private int code;
	private String mesg;
	@Override
	public String toString() {
		return "AjaxModel []";
	}
	public AjaxModel(int code, String mesg) {
		super();
		this.code = code;
		this.mesg = mesg;
	}
	public int getCode() {
		return code;
	}
	public void setCode(int code) {
		this.code = code;
	}
	public String getMesg() {
		return mesg;
	}
	public void setMesg(String mesg) {
		this.mesg = mesg;
	}
	
	
}
