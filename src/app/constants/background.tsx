import Particles from "../components/particles/particles";
import Aurora from "../components/aurora/aurora";

export default function Background() {
    return (
        <div style={{ 
            position: 'fixed', 
            top: 0,
            width: '100vw', 
            height: '100vh', 
            zIndex: -1 
        }}>
            <Particles
                particleColors={['#ffffff', '#ffffff']}
                particleCount={200}
                particleSpread={10}
                speed={0.1}
                particleBaseSize={100}
                moveParticlesOnHover={false}
                alphaParticles={false}
                disableRotation={false}
            />
            <Aurora
                colorStops={['#00d8ff', '#7cff67', '#00d8ff']}
                amplitude={1.0}
                blend={0.5}
            />
        </div>
    );
}
