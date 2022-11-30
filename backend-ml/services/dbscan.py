from sklearn.preprocessing import StandardScaler
from sklearn.cluster import DBSCAN


def dbscan(df_data, eps, min_samples):
    ss = StandardScaler()
    ss.fit(df_data)
    df_scaled = ss.transform(df_data)
    ds_model = DBSCAN(eps=eps, min_samples=min_samples)
    ds_model.fit(df_scaled)
    df_data["cluster"] = ds_model.fit_predict(df_scaled)
    return df_data
