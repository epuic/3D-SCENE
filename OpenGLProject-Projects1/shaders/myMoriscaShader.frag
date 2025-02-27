#version 330 core
in vec3 fragPos;
in vec3 fragNormal;

uniform vec3 lightPos;
uniform vec3 viewPos;

out vec4 FragColor;

void main() {
    // Calcula?i lumina ?i culoarea mori?cii (simplificat)
    vec3 lightDir = normalize(lightPos - fragPos);
    float diff = max(dot(fragNormal, lightDir), 0.0);
    
    vec3 color = vec3(1.0, 0.5, 0.2); // Culoare simpl? pentru mori?c?
    FragColor = vec4(diff * color, 1.0);
}
