import _ from "lodash";

import React from "react";
import { WidthProvider, Responsive } from "react-grid-layout";
import styled from "styled-components";
import { Image } from "@mantine/core";

const ResponsiveReactGridLayout = WidthProvider(Responsive);
const originalLayouts = getFromLS("layouts") || {};

/**
 * This layout demonstrates how to sync multiple responsive layouts to localstorage.
 */
export default class ResponsiveLocalStorageLayout extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      layouts: JSON.parse(JSON.stringify(originalLayouts)),
    };
  }

  static get defaultProps() {
    return {
      className: "layout",
      // cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
      // rowHeight: 30,
    };
  }

  resetLayout() {
    this.setState({ layouts: {} });
  }

  onLayoutChange(layout, layouts) {
    saveToLS("layouts", layouts);
    this.setState({ layouts });
  }

  Widget1UI = () => {
    return (
      <>
        <Image
          maw={240}
          mx="auto"
          radius="md"
          src="./avatar.png"
          alt="Random image"
        />
      </>
    );
  };

  generateDOM() {
    // Generate items with properties from the layout, rather than pass the layout directly
    const layout = [
      { i: "blue-eyes-dragon", x: 0, y: 0, w: 1, h: 1 },
      { i: "dark-magician", x: 1, y: 0, w: 1, h: 1 },
      { i: "kuriboh", x: 2, y: 0, w: 1, h: 1 },
      { i: "spell-caster", x: 3, y: 0, w: 1, h: 1 },
      { i: "widdget_1", x: 4, y: 0, w: 1, h: 1 },
    ];
    return _.map(layout, function (l) {
      // if (l.i == "widdget_1") {
      return (
        <div key={l.i} data-grid={l} className="bg-gray-300">
          <span className="text">{l.i}</span>
        </div>
      );
      // }
    });
  }

  render() {
    return (
      <div>
        <button
          className="text-white py-1 px-2 rounded-full bg-blue-500 mb-3"
          onClick={() => this.resetLayout()}
        >
          Reset Layout
        </button>
        <div className="absolute w-full">
          <ResponsiveReactGridLayout
            className="layout"
            // cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
            breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
            cols={{ lg: 5, md: 4, sm: 3, xs: 2, xxs: 1 }}
            rowHeight={300}
            layouts={this.state.layouts}
            onLayoutChange={(layout, layouts) =>
              this.onLayoutChange(layout, layouts)
            }
          >
            {this.generateDOM()}
          </ResponsiveReactGridLayout>
        </div>
      </div>
    );
  }
}

function getFromLS(key) {
  let ls = {};
  if (global.localStorage) {
    try {
      ls = JSON.parse(global.localStorage.getItem("rgl-8")) || {};
    } catch (e) {
      /*Ignore*/
    }
  }
  return ls[key];
}

function saveToLS(key, value) {
  if (global.localStorage) {
    global.localStorage.setItem(
      "rgl-8",
      JSON.stringify({
        [key]: value,
      })
    );
  }
}
