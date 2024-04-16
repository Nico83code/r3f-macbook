import { Perf } from "r3f-perf";
import {
  Center,
  Html,
  ContactShadows,
  PresentationControls,
  useGLTF,
  Environment,
  Float,
} from "@react-three/drei";

export default function Experience() {
  const computer = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf"
  );

  return (
    <>
      <Perf position="top-left" />

      <Environment preset="city" />

      <color args={["#827b7b"]} attach="background" />
      <Center>
        <PresentationControls
          global
          rotation={[0.13, 0.1, 0]}
          polar={[-0.4, 0.2]}
          azimuth={[-1, 0.75]}
          config={{ mass: 2, tension: 400 }}
          snap={{ mass: 4, tension: 400 }}
        >
          <Float rotationIntensity={0.4}>
            <rectAreaLight
              width={2.5}
              height={1.65}
              intensity={55}
              color={"#f0d1ba"}
              rotation={[-0.1, Math.PI, 0]}
              position={[0, 0.55, -1.15]}
            />

            <primitive object={computer.scene} position-y={-0.5} scale={0.9}>
              <Html
                transform
                wrapperClass="htmlScreen"
                distanceFactor={1.17}
                position={[0, 1.56, -1.4]}
                rotation-x={-0.256}
              >
                <iframe src="https://www.touchtribe.nl" />
              </Html>
            </primitive>
          </Float>
        </PresentationControls>
      </Center>

      <ContactShadows position-y={-1.4} opacity={0.4} scale={5} blur={2.4} />
    </>
  );
}
