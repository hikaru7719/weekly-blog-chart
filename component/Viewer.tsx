import { Card, Col, Layout, Row, Slider, Typography } from "antd";
import * as React from "react";
import {
  Bar,
  CartesianGrid,
  ComposedChart as BarChart,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";

import { Header } from "./layout/Header";

const { Content } = Layout;
export const Viewer = () => {
  const [barSize, setBarSize] = React.useState(10);
  const styles = {
    div: {
      margin: "30px",
      textAlign: "center"
    },
    chartDiv: {
      margin: "0 auto"
    }
  } as const;

  const data = [
    {
      name: "2020/03/07",
      pv: 237,
      hatena: 4,
      twitter: 259
    },
    {
      name: "2020/03/14",
      pv: 317,
      hatena: 4,
      twitter: 266
    },
    {
      name: "2020/03/21",
      pv: 200,
      hatena: 4,
      twitter: 269
    },
    {
      name: "2020/03/28",
      pv: 317,
      hatena: 4,
      twitter: 266
    },
    {
      name: "2020/03/30",
      pv: 200,
      hatena: 4,
      twitter: 269
    },
    {
      name: "2020/03/31",
      pv: 317,
      hatena: 4,
      twitter: 266
    },
    {
      name: "2020/03/32",
      pv: 200,
      hatena: 4,
      twitter: 269
    }
  ];
  const xsSpan = 24;
  const smSpan = 11;

  const onChangeBarSize = (value: number | [number, number]) => {
    if (typeof value === "number") {
      setBarSize(value);
    }
  };
  return (
    <Layout>
      <Header />
      <Content>
        <div style={{ width: "100%" }}>
          <div style={styles.div}>
            <Row justify="center" gutter={[{ xs: 0, sm: 50 }, 40]}>
              <Col xs={xsSpan} sm={smSpan}>
                <Card style={{ height: 370 }}>
                  <Typography.Title>Weekly Metrics</Typography.Title>
                  <div style={{ textAlign: "left" }}>
                    <Typography.Text>
                      週間のメトリクスをグラフで表示します。
                    </Typography.Text>
                    <Typography.Text>
                      毎週日曜日に各メトリクスの数値を更新します。以下のスライダーでバーの太さと表示するデータの期間を変更できます。
                    </Typography.Text>
                    <Typography.Title level={4}>BarSize</Typography.Title>
                    <Slider
                      defaultValue={barSize}
                      max={30}
                      min={5}
                      onChange={onChangeBarSize}
                    />
                  </div>
                </Card>
              </Col>
              <Col xs={xsSpan} sm={smSpan}>
                <Card>
                  <div style={styles.chartDiv}>
                    ブログPV
                    <ResponsiveContainer width="100%" height={300}>
                      <BarChart className="container" data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="pv" fill="#00bcd4" barSize={barSize} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </Card>
              </Col>
              <Col xs={xsSpan} sm={smSpan}>
                <Card>
                  Twitterフォロワー数
                  <div style={styles.chartDiv}>
                    <ResponsiveContainer width="100%" height={300}>
                      <BarChart className="container" data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar
                          dataKey="twitter"
                          fill="#2196f3"
                          barSize={barSize}
                        />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </Card>
              </Col>
              <Col xs={xsSpan} sm={smSpan}>
                <Card>
                  はてなブックマーク数
                  <div style={styles.chartDiv}>
                    <ResponsiveContainer width="100%" height={300}>
                      <BarChart className="container" data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar
                          dataKey="hatena"
                          fill="#009688"
                          barSize={barSize}
                        />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </Card>
              </Col>
            </Row>
          </div>
        </div>
      </Content>
    </Layout>
  );
};
