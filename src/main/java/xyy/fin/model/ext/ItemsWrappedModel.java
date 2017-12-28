package xyy.fin.model.ext;

import java.util.List;

public class ItemsWrappedModel<S, T> {
	
	private List<S> fromList;
	private List<T> toList;
	public ItemsWrappedModel() {
		super();
	}
	public ItemsWrappedModel(List<S> fromList, List<T> toList) {
		super();
		this.fromList = fromList;
		this.toList = toList;
	}
	public List<S> getFromList() {
		return fromList;
	}
	public void setFromList(List<S> fromList) {
		this.fromList = fromList;
	}
	public List<T> getToList() {
		return toList;
	}
	public void setToList(List<T> toList) {
		this.toList = toList;
	}
	

}
