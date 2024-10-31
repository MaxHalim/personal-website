document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Three.js code
// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// const renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.getElementById('bg-canvas').appendChild(renderer.domElement);

// const geometry = new THREE.BoxGeometry();
// const material = new THREE.ShaderMaterial({
//     uniforms: {
//         time: { value: 0 },
//         resolution: { value: new THREE.Vector2() }
//     },
//     vertexShader: `
//         varying vec2 vUv;
//         void main() {
//             vUv = uv;
//             gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
//         }
//     `,
//     fragmentShader: `
//         uniform float time;
//         uniform vec2 resolution;
//         varying vec2 vUv;
//         void main() {
//             vec2 position = vUv;
//             float color = 0.0;
//             color += sin(position.x * cos(time / 15.0) * 80.0) + cos(position.y * cos(time / 15.0) * 10.0);
//             color += sin(position.y * sin(time / 10.0) * 40.0) + cos(position.x * sin(time / 25.0) * 40.0);
//             color += sin(position.x * sin(time / 5.0) * 10.0) + sin(position.y * sin(time / 35.0) * 80.0);
//             color *= sin(time / 10.0) * 0.5;
//             gl_FragColor = vec4(color, color * 0.5, sin(color + time / 3.0) * 0.75, 1.0);
//         }
//     `
// });

// const cube = new THREE.Mesh(geometry, material);
// scene.add(cube);

// camera.position.z = 5;

// let mouseX = 0;
// let mouseY = 0;

// document.addEventListener('mousemove', (event) => {
//     mouseX = (event.clientX / window.innerWidth) * 2 - 1;
//     mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
// });

// function animate() {
//     requestAnimationFrame(animate);

//     cube.rotation.x += 0.01;
//     cube.rotation.y += 0.01;

//     cube.rotation.x += mouseY * 0.05;
//     cube.rotation.y += mouseX * 0.05;

//     material.uniforms.time.value += 0.05;

//     renderer.render(scene, camera);
// }

// animate();

// window.addEventListener('resize', () => {
//     camera.aspect = window.innerWidth / window.innerHeight;
//     camera.updateProjectionMatrix();
//     renderer.setSize(window.innerWidth, window.innerHeight);
// });