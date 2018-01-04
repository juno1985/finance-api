package xyy.fin.model.ext;

import java.util.Date;

public class ChgHistExtModel {

	private String fromItem;
	private String toItem;
	private Long chgAmmount;
	private String chgComment;
	private Date chgTime;
	public ChgHistExtModel() {
	}
	public ChgHistExtModel(String fromItem, String toItem, Long chgAmmount, String chgComment, Date chgTime) {
		this.fromItem = fromItem;
		this.toItem = toItem;
		this.chgAmmount = chgAmmount;
		this.chgComment = chgComment;
		this.chgTime = chgTime;
	}
	public String getFromItem() {
		return fromItem;
	}
	public void setFromItem(String fromItem) {
		this.fromItem = fromItem;
	}
	public String getToItem() {
		return toItem;
	}
	public void setToItem(String toItem) {
		this.toItem = toItem;
	}
	public Long getChgAmmount() {
		return chgAmmount;
	}
	public void setChgAmmount(Long chgAmmount) {
		this.chgAmmount = chgAmmount;
	}
	public String getChgComment() {
		return chgComment;
	}
	public void setChgComment(String chgComment) {
		this.chgComment = chgComment;
	}
	public Date getChgTime() {
		return chgTime;
	}
	public void setChgTime(Date chgTime) {
		this.chgTime = chgTime;
	}
	@Override
	public String toString() {
		return "ChgHistExtModel [fromItem=" + fromItem + ", toItem=" + toItem + ", chgAmmount=" + chgAmmount
				+ ", chgComment=" + chgComment + ", chgTime=" + chgTime + "]";
	}
	 
	 
}
