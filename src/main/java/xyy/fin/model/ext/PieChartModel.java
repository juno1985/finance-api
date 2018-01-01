package xyy.fin.model.ext;

import java.util.ArrayList;
import java.util.List;

public class PieChartModel {

	private Legend legend;
	private List<XAxis> xAxis;
	private List<SnapItemModel> series;
	
	public PieChartModel() {
		this.xAxis = new ArrayList<>();
		this.series = new ArrayList<>();
	}
	public Legend getLegend() {
		return legend;
	}
	public void setLegend(Legend legend) {
		this.legend = legend;
	}
	public List<XAxis> getxAxis() {
		return xAxis;
	}
	public void setxAxis(List<XAxis> xAxis) {
		this.xAxis = xAxis;
	}
	public List<SnapItemModel> getSeries() {
		return series;
	}
	public void setSeries(List<SnapItemModel> series) {
		this.series = series;
	}
	
	
}
