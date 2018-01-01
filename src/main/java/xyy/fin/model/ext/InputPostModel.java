package xyy.fin.model.ext;

public class InputPostModel {

	private Integer fromItem;
	private Integer toItem;
	private Long tranAccount;
	private String shortComment;
	
	public InputPostModel() {
	}

	public InputPostModel(Integer fromItem, Integer toItem, Long tranAccount, String shortComment) {
		this.fromItem = fromItem;
		this.toItem = toItem;
		this.tranAccount = tranAccount;
		this.shortComment = shortComment;
	}

	public Integer getFromItem() {
		return fromItem;
	}

	public void setFromItem(Integer fromItem) {
		this.fromItem = fromItem;
	}

	public Integer getToItem() {
		return toItem;
	}

	public void setToItem(Integer toItem) {
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
