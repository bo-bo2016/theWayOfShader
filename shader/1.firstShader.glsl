attribute vec4 a_Position;
    varying vec2 uv;

    void main() {
        gl_Position = vec4(vec2(a_Position), 0.0, 1.0);
        uv = vec2(0.5, 0.5) * (vec2(a_Position) + vec2(1.0, 1.0));
    }
     precision mediump float;
    varying vec2 uv;
    uniform float time;     // 变化时间

    void main() {
        float r = uv.x;
        float g = uv.y;
        float b = abs(sin(time));
        gl_FragColor = vec4(r,g,b,1.);
    }