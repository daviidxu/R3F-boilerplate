import { Canvas } from "@react-three/fiber";
import "./App.css";

const App = () => {
  return (
    <Canvas>
      <mesh>
        <torusKnotGeometry />
        <meshNormalMaterial />
      </mesh>
    </Canvas>
  );
};

export default App;
