"use client";

import { Component } from "react";

/**
 * Si WebGL/WebGPU no está disponible o el canvas truena, mostramos un
 * respaldo en CSS puro en vez de romper la página.
 */
export default class SceneBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { fallo: false };
  }

  static getDerivedStateFromError() {
    return { fallo: true };
  }

  componentDidCatch(error) {
    console.warn("Escena 3D no disponible, usando respaldo:", error);
  }

  render() {
    if (this.state.fallo) return this.props.fallback ?? null;
    return this.props.children;
  }
}
