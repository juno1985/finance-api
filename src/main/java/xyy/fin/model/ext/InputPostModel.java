package xyy.fin.model.ext;

public class InputPostModel {

	private String fromItem;
	private String toItem;
	private Long tranAccount;
	private String shortComment;
	
	public InputPostModel() {
		super();
	}
	public InputPostModel(String fromItem, String toItem, Long tranAccount) {
		super();
		this.fromItem = fromItem;
		this.toItem = toItem;
		this.tranAccount = tranAccount;
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
	public Long getTranAccount() {
		return tranAccount;
	}
	public void setTranAccount(Long tranAccount) {
		this.tranAccount = tranAccount;
	}
	
	public String getShortComment() {
		return shortComment;
	}
	public void setShortComment(String shortComment) {
		this.shortComment = shortComment;
	}
	@Override
	public String toString() {
		return "InputPostModel [fromItem=" + fromItem + ", toItem=" + toItem + ", tranAccount=" + tranAccount
				+ ", shortComment=" + shortComment + "]";
	}
	
	
}
