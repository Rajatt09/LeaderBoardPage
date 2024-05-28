import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { Rating } from "primereact/rating";
import { Tag } from "primereact/tag";
import { ProductService } from "./ProductService";
import { Badge } from "primereact/badge";
import { Dropdown } from "primereact/dropdown";
import { FloatLabel } from "primereact/floatlabel";
import { FaArrowTrendUp } from "react-icons/fa6";
import { InputIcon } from "primereact/inputicon";
import { IconField } from "primereact/iconfield";
import { InputText } from "primereact/inputtext";
import { IoIosSearch } from "react-icons/io";
import "./dash.css";

export default function Dash() {
  const [products, setProducts] = useState([]);
  const productService = new ProductService();

  const [selectedCity, setSelectedslippage] = useState(null);
  const cities = [{ name: "0 %" }, { name: "0.5 %" }, { name: "1 %" }];

  useEffect(() => {
    productService.getProductsMini().then((data) => setProducts(data));
  }, []);

  const formatCurrency = (value) => {
    return value.toLocaleString("en-IN", {
      style: "currency",
      currency: "INR",
    });
  };

  const priceBodyTemplate = (product) => {
    return formatCurrency(product.price);
  };

  const ratingBodyTemplate = (product) => {
    return <Rating value={product.rating} readOnly cancel={false} />;
  };

  const statusBodyTemplate = (product) => {
    return (
      <Button
        style={{
          minWidth: "80px",
          display: "flex",
          justifyContent: "center",
          backgroundColor: "rgba(226, 116, 152, 1)",
          border: "none",
        }}
      >
        {" "}
        {getSeverity(product)}
      </Button>
    );
  };

  const getSeverity = (product) => {
    switch (product.Action) {
      case "View":
        return "View";

      case "Buy":
        return "Buy";

      default:
        return null;
    }
  };

  const header = (
    <div>
      <div id="box1">
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span
            style={{
              fontSize: "1.8rem",
              // borderLeft: "5px solid #374151",
              borderRadius: "5px",
              borderLeft: "5px solid rgba(226, 116, 152, 1)",
              color: "rgba(226, 116, 152, 1)",
            }}
          >
            &nbsp; Basic Backtest
          </span>

          <div className="drop">
            Slippage : &nbsp;
            <Dropdown
              value={selectedCity}
              onChange={(e) => setSelectedslippage(e.value)}
              options={cities}
              showClear
              optionLabel="name"
              placeholder="Select a slippage"
              style={{
                boxShadow: "0 0 0 0.2rem rgba(226, 116, 152, 0.4)",
                borderColor: "rgba(226, 116, 152, 1)",
              }}
            />
          </div>
        </div>
      </div>

      <div id="box2">
        <div>
          <span
            style={{
              fontSize: "1.8rem",
              // borderLeft: "5px solid #374151",
              borderRadius: "5px",
              borderLeft: "5px solid rgba(226, 116, 152, 1)",
              color: "rgba(226, 116, 152, 1)",
            }}
          >
            &nbsp; Basic Backtest
          </span>

          <div className="drop">
            Slippage : &nbsp;
            <Dropdown
              value={selectedCity}
              onChange={(e) => setSelectedslippage(e.value)}
              options={cities}
              showClear
              optionLabel="name"
              placeholder="Select a slippage"
              style={{
                boxShadow: "0 0 0 0.2rem rgba(226, 116, 152, 0.4)",
                borderColor: "rgba(226, 116, 152, 1)",
              }}
            />
          </div>
          <div className="drop2" style={{ marginTop: "30px" }}>
            <FloatLabel>
              <Dropdown
                inputId="dd-city"
                value={selectedCity}
                onChange={(e) => setSelectedslippage(e.value)}
                options={cities}
                optionLabel="name"
                style={{
                  width: "130px",
                  boxShadow: "0 0 0 0.2rem rgba(226, 116, 152, 0.4)",
                  borderColor: "rgba(226, 116, 152, 1)",
                }}
              />
              <label htmlFor="dd-city">Slippage</label>
            </FloatLabel>
          </div>
        </div>
      </div>
    </div>
  );
  const footer = `In total there are ${
    products ? products.length : 0
  } entries.`;

  const formatCalmarField = (product) => {
    return (
      <>
        <FaArrowTrendUp style={{ marginBottom: "-3px", color: "green" }} />{" "}
        {product.Calmar}
      </>
    );
  };

  return (
    <div className="card">
      <DataTable
        value={products}
        header={header}
        footer={footer}
        tableStyle={{ minWidth: "60rem" }}
      >
        <Column field="Rank" header="Rank"></Column>
        <Column field="name" header="Name"></Column>
        <Column
          field="Calmar"
          header="Calmar Ratio"
          body={formatCalmarField}
        ></Column>
        <Column field="Overall" header="Overall Profit"></Column>
        <Column field="AvgProfit" header="Avg. Daily Profit"></Column>
        <Column field="Win" header="Win % (Day)"></Column>
        <Column
          field="price"
          header="Price (Rs)"
          body={priceBodyTemplate}
        ></Column>

        <Column header="Action" body={statusBodyTemplate}></Column>
      </DataTable>
    </div>
  );
}
