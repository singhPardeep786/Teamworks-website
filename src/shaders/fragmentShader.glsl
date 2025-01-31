varying vec2 vUv;
varying float vElevation;
uniform float uColorChange;  

void main() {
    vec4 c1 = vec4(0.9882, 0.6549, 0.7647, 1.0);
    vec4 c2 = vec4(0.9804, 0.7843, 0.8471, 1.0);

    vec4 c3 = vec4(0.9882, 0.8471, 0.7176, 1.0);
    vec4 c4 = vec4(1.0, 0.9137, 0.749, 1.0);

    float v =smoothstep(-.14,.14,vElevation);
    vec4 color = mix(c1,c2,v);
    vec4 coloredYellow = mix(c3,c4,v);

    vec4 finalColor = mix(color, coloredYellow, uColorChange);
    
    gl_FragColor = finalColor;
}
