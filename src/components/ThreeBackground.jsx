import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const mountNode = canvasRef.current;
    if (!mountNode) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0a0a0a); // Dark background

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 50;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ 
      alpha: false, 
      antialias: true,
      powerPreference: "high-performance"
    });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    
    // Ensure the canvas is properly positioned
    renderer.domElement.style.position = 'absolute';
    renderer.domElement.style.top = '0';
    renderer.domElement.style.left = '0';
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    renderer.domElement.style.pointerEvents = 'none';
    renderer.domElement.style.zIndex = '0';
    
    mountNode.appendChild(renderer.domElement);

    // Create floating geometric shapes
    const createGeometricShapes = () => {
      const shapes = [];
      const geometries = [
        new THREE.BoxGeometry(2, 2, 2),
        new THREE.SphereGeometry(1.5, 32, 32),
        new THREE.OctahedronGeometry(1.5),
        new THREE.TetrahedronGeometry(2),
        new THREE.TorusGeometry(1, 0.4, 16, 100)
      ];

      for (let i = 0; i < 15; i++) {
        const geometry = geometries[Math.floor(Math.random() * geometries.length)];
        const material = new THREE.MeshPhongMaterial({
          color: new THREE.Color().setHSL(Math.random() * 0.7 + 0.1, 1.0, 0.7), // Full neon color spectrum
          transparent: true,
          opacity: 0.1,
          wireframe: true,
          wireframeLinewidth: 1
        });
        
        const mesh = new THREE.Mesh(geometry, material);
        mesh.position.set(
          (Math.random() - 0.5) * 80,
          (Math.random() - 0.5) * 80,
          (Math.random() - 0.5) * 80
        );
        mesh.rotation.set(
          Math.random() * Math.PI,
          Math.random() * Math.PI,
          Math.random() * Math.PI
        );
        
        // Add animation properties
        mesh.userData = {
          rotationSpeed: {
            x: (Math.random() - 0.5) * 0.02,
            y: (Math.random() - 0.5) * 0.02,
            z: (Math.random() - 0.5) * 0.02
          },
          floatSpeed: Math.random() * 0.01 + 0.005,
          floatOffset: Math.random() * Math.PI * 2
        };
        
        shapes.push(mesh);
        scene.add(mesh);
      }
      
      return shapes;
    };

    // Create enhanced particle system with multiple types
    const createParticles = () => {
      const particleSystems = [];
      
      // Standard particles (dots)
      const createStandardParticles = () => {
        const particleCount = 200;
        const positions = new Float32Array(particleCount * 3);
        const colors = new Float32Array(particleCount * 3);
        const sizes = new Float32Array(particleCount);

        for (let i = 0; i < particleCount; i++) {
          positions[i * 3] = (Math.random() - 0.5) * 100;
          positions[i * 3 + 1] = (Math.random() - 0.5) * 100;
          positions[i * 3 + 2] = (Math.random() - 0.5) * 100;

          // Create a gradient of neon colors
          const color = new THREE.Color();
          // Neon colors: cyan, magenta, lime green, electric blue
          const neonHues = [0.5, 0.83, 0.3, 0.6]; // Cyan, Magenta, Lime, Electric Blue
          color.setHSL(neonHues[Math.floor(Math.random() * neonHues.length)], 1.0, 0.7);
          colors[i * 3] = color.r;
          colors[i * 3 + 1] = color.g;
          colors[i * 3 + 2] = color.b;

          sizes[i] = Math.random() * 2 + 0.5;
        }

        const geometry = new THREE.BufferGeometry();
        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
        geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

        const material = new THREE.PointsMaterial({
          size: 1,
          vertexColors: true,
          transparent: true,
          opacity: 0.8,
          blending: THREE.AdditiveBlending,
          sizeAttenuation: true
        });

        const particles = new THREE.Points(geometry, material);
        particles.userData = {
          rotationSpeed: {
            x: 0.0005,
            y: 0.001,
            z: 0.0003
          }
        };
        scene.add(particles);
        return particles;
      };
      
      // Star-shaped particles
      const createStarParticles = () => {
        const particleCount = 50;
        const starShape = new THREE.Shape();
        const outerRadius = 0.5;
        const innerRadius = 0.2;
        const spikes = 5;
        
        for (let i = 0; i < spikes * 2; i++) {
          const radius = i % 2 === 0 ? outerRadius : innerRadius;
          const angle = (i / (spikes * 2)) * Math.PI * 2;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;
          
          if (i === 0) {
            starShape.moveTo(x, y);
          } else {
            starShape.lineTo(x, y);
          }
        }
        starShape.closePath();
        
        const starGeometry = new THREE.ShapeGeometry(starShape);
        const stars = new THREE.Group();
        
        for (let i = 0; i < particleCount; i++) {
          const material = new THREE.MeshBasicMaterial({
            color: new THREE.Color().setHSL(0.3 + Math.random() * 0.1, 1.0, 0.7), // Neon green/cyan
            transparent: true,
            opacity: 0.6,
            side: THREE.DoubleSide
          });
          
          const star = new THREE.Mesh(starGeometry, material);
          star.position.set(
            (Math.random() - 0.5) * 100,
            (Math.random() - 0.5) * 100,
            (Math.random() - 0.5) * 100
          );
          star.rotation.set(
            Math.random() * Math.PI,
            Math.random() * Math.PI,
            Math.random() * Math.PI
          );
          star.scale.set(0.5, 0.5, 0.5);
          
          star.userData = {
            rotationSpeed: {
              x: (Math.random() - 0.5) * 0.01,
              y: (Math.random() - 0.5) * 0.01,
              z: (Math.random() - 0.5) * 0.01
            },
            floatSpeed: Math.random() * 0.01 + 0.005,
            floatOffset: Math.random() * Math.PI * 2
          };
          
          stars.add(star);
        }
        
        scene.add(stars);
        return stars;
      };
      
      // Glowing orbs
      const createGlowingOrbs = () => {
        const orbCount = 30;
        const orbs = new THREE.Group();
        
        for (let i = 0; i < orbCount; i++) {
          const geometry = new THREE.SphereGeometry(0.3, 16, 16);
          const material = new THREE.MeshBasicMaterial({
            color: new THREE.Color().setHSL(0.83 + Math.random() * 0.1, 1.0, 0.7), // Neon pink/magenta
            transparent: true,
            opacity: 0.4,
          });
          
          const orb = new THREE.Mesh(geometry, material);
          orb.position.set(
            (Math.random() - 0.5) * 120,
            (Math.random() - 0.5) * 120,
            (Math.random() - 0.5) * 120
          );
          
          orb.userData = {
            pulsateSpeed: Math.random() * 0.02 + 0.01,
            pulsateOffset: Math.random() * Math.PI * 2,
            floatSpeed: Math.random() * 0.01 + 0.005,
            floatOffset: Math.random() * Math.PI * 2,
            originalScale: 0.5 + Math.random() * 1.5
          };
          
          orb.scale.set(
            orb.userData.originalScale,
            orb.userData.originalScale,
            orb.userData.originalScale
          );
          
          orbs.add(orb);
        }
        
        scene.add(orbs);
        return orbs;
      };
      
      // Custom polygon particles
      const createPolygonParticles = () => {
        const polygonCount = 40;
        const polygons = new THREE.Group();
        
        // Different polygon types
        const createPolygonGeometry = (sides) => {
          const shape = new THREE.Shape();
          const radius = 0.5;
          
          for (let i = 0; i < sides; i++) {
            const angle = (i / sides) * Math.PI * 2;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            
            if (i === 0) {
              shape.moveTo(x, y);
            } else {
              shape.lineTo(x, y);
            }
          }
          shape.closePath();
          return new THREE.ShapeGeometry(shape);
        };
        
        // Create different polygon geometries
        const polygonGeometries = [
          createPolygonGeometry(3),  // Triangle
          createPolygonGeometry(4),  // Square
          createPolygonGeometry(6),  // Hexagon
          createPolygonGeometry(8)   // Octagon
        ];
        
        for (let i = 0; i < polygonCount; i++) {
          const geometry = polygonGeometries[Math.floor(Math.random() * polygonGeometries.length)];
          const material = new THREE.MeshBasicMaterial({
            color: new THREE.Color().setHSL(0.15 + Math.random() * 0.1, 1.0, 0.7), // Neon yellow/orange
            transparent: true,
            opacity: 0.5,
            side: THREE.DoubleSide,
            wireframe: Math.random() > 0.5 // Some polygons are wireframe
          });
          
          const polygon = new THREE.Mesh(geometry, material);
          polygon.position.set(
            (Math.random() - 0.5) * 120,
            (Math.random() - 0.5) * 120,
            (Math.random() - 0.5) * 120
          );
          polygon.rotation.set(
            Math.random() * Math.PI,
            Math.random() * Math.PI,
            Math.random() * Math.PI
          );
          
          // Random scale between 0.5 and 2
          const scale = 0.5 + Math.random() * 1.5;
          polygon.scale.set(scale, scale, scale);
          
          polygon.userData = {
            rotationSpeed: {
              x: (Math.random() - 0.5) * 0.02,
              y: (Math.random() - 0.5) * 0.02,
              z: (Math.random() - 0.5) * 0.02
            },
            floatSpeed: Math.random() * 0.01 + 0.005,
            floatOffset: Math.random() * Math.PI * 2
          };
          
          polygons.add(polygon);
        }
        
        scene.add(polygons);
        return polygons;
      };
      
      // Create all particle types
      particleSystems.push(createStandardParticles());
      particleSystems.push(createStarParticles());
      particleSystems.push(createGlowingOrbs());
      particleSystems.push(createPolygonParticles());
      
      return particleSystems;
    };

    // Create floating lines
    const createFloatingLines = () => {
      const lines = [];
      const lineCount = 20;

      for (let i = 0; i < lineCount; i++) {
        const points = [];
        const segments = Math.floor(Math.random() * 3) + 2;
        
        for (let j = 0; j < segments; j++) {
          points.push(new THREE.Vector3(
            (Math.random() - 0.5) * 60,
            (Math.random() - 0.5) * 60,
            (Math.random() - 0.5) * 60
          ));
        }

        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        const material = new THREE.LineBasicMaterial({
          color: new THREE.Color().setHSL(0.5 + Math.random() * 0.4, 1.0, 0.7), // Neon cyan to purple range
          transparent: true,
          opacity: 0.3
        });

        const line = new THREE.Line(geometry, material);
        line.userData = {
          rotationSpeed: {
            x: (Math.random() - 0.5) * 0.01,
            y: (Math.random() - 0.5) * 0.01,
            z: (Math.random() - 0.5) * 0.01
          }
        };
        
        lines.push(line);
        scene.add(line);
      }
      
      return lines;
    };

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 0.4);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(10, 10, 5);
    directionalLight.castShadow = true;
    scene.add(directionalLight);

    const pointLight = new THREE.PointLight(0x00ffff, 1, 100); // Bright cyan light
    pointLight.position.set(0, 0, 20);
    scene.add(pointLight);

    // Create objects
    const shapes = createGeometricShapes();
    const particles = createParticles();
    const lines = createFloatingLines();

    // Mouse interaction
    let mouseX = 0;
    let mouseY = 0;
    
    const handleMouseMove = (event) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      const time = Date.now() * 0.001;

      // Animate shapes
      shapes.forEach((shape) => {
        shape.rotation.x += shape.userData.rotationSpeed.x;
        shape.rotation.y += shape.userData.rotationSpeed.y;
        shape.rotation.z += shape.userData.rotationSpeed.z;
        
        // Floating animation
        shape.position.y += Math.sin(time * shape.userData.floatSpeed + shape.userData.floatOffset) * 0.1;
        
        // Mouse interaction
        shape.rotation.x += mouseY * 0.001;
        shape.rotation.y += mouseX * 0.001;
      });

      // Animate particles
      particles.forEach((particleSystem) => {
        if (particleSystem instanceof THREE.Points && particleSystem.userData && particleSystem.userData.rotationSpeed) {
          // Standard particles
          particleSystem.rotation.x += particleSystem.userData.rotationSpeed.x;
          particleSystem.rotation.y += particleSystem.userData.rotationSpeed.y;
          particleSystem.rotation.z += particleSystem.userData.rotationSpeed.z;
        } else if (particleSystem instanceof THREE.Group) {
          // Star particles or glowing orbs
          particleSystem.children.forEach(particle => {
            // Rotate each particle
            if (particle.userData && particle.userData.rotationSpeed) {
              particle.rotation.x += particle.userData.rotationSpeed.x;
              particle.rotation.y += particle.userData.rotationSpeed.y;
              particle.rotation.z += particle.userData.rotationSpeed.z;
            }
            
            // Float animation
            if (particle.userData && particle.userData.floatSpeed) {
              particle.position.y += Math.sin(time * particle.userData.floatSpeed + particle.userData.floatOffset) * 0.05;
            }
            
            // Pulsate animation for orbs
            if (particle.userData && particle.userData.pulsateSpeed) {
              const scale = particle.userData.originalScale + 
                Math.sin(time * particle.userData.pulsateSpeed + particle.userData.pulsateOffset) * 0.2;
              particle.scale.set(scale, scale, scale);
            }
          });
          
          // Rotate the entire group slightly
          particleSystem.rotation.y += 0.0005;
        }
        
        // Mouse interaction - only if the particleSystem has rotation property
        if (particleSystem.rotation) {
          particleSystem.rotation.x += mouseY * 0.0005;
          particleSystem.rotation.y += mouseX * 0.0005;
        }
      });

      // Animate lines
      lines.forEach(line => {
        line.rotation.x += line.userData.rotationSpeed.x;
        line.rotation.y += line.userData.rotationSpeed.y;
        line.rotation.z += line.userData.rotationSpeed.z;
      });

      // Camera movement
      camera.position.x += (mouseX * 5 - camera.position.x) * 0.01;
      camera.position.y += (mouseY * 5 - camera.position.y) * 0.01;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };

    // Resize handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    // Event listeners
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    // Start animation
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);

      if (mountNode && renderer.domElement) {
        mountNode.removeChild(renderer.domElement);
      }

      // Dispose of Three.js objects
      shapes.forEach(shape => {
        scene.remove(shape);
        shape.geometry.dispose();
        shape.material.dispose();
      });
      
      // Clean up all particle systems
      particles.forEach(particleSystem => {
        scene.remove(particleSystem);
        
        if (particleSystem instanceof THREE.Points) {
          // Standard particles
          particleSystem.geometry.dispose();
          particleSystem.material.dispose();
        } else if (particleSystem instanceof THREE.Group) {
          // Star particles or glowing orbs
          particleSystem.children.forEach(particle => {
            particle.geometry.dispose();
            particle.material.dispose();
          });
        }
      });
      
      lines.forEach(line => {
        scene.remove(line);
        line.geometry.dispose();
        line.material.dispose();
      });
      
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={canvasRef}
      className="hero-canvas"
      style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        width: '100vw', 
        height: '100vh', 
        zIndex: 0, // Background layer - below all content
        pointerEvents: 'none',
        overflow: 'hidden'
      }}
    />
  );
};

export default ThreeBackground;

