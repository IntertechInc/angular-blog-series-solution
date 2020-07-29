export interface ReportCriteriaFormInterface<T> {
	validateCriteria(): boolean;
	getSearchCriteria(): T;
}
