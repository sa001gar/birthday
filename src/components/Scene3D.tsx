import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { BirthdayCake } from './BirthdayCake';

export function Scene3D() {
  return (
    <div className="h-[300px] w-full">
      <Canvas camera={{ position: [0, 2, 5] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <BirthdayCake />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}