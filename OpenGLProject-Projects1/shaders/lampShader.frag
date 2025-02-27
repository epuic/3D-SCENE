#version 410 core

in vec3 FragPos; // Pozi?ia fragmentului
out vec4 FragColor;

uniform vec3 lightPos; // Pozi?ia sursei de lumin? (pozi?ia l?mpii)
uniform vec3 viewPos;  // Pozi?ia camerei
uniform vec3 lightColor; // Culoarea luminii
uniform float constant; // Factorul constant al luminii
uniform float linear;   // Factorul liniar al luminii
uniform float quadratic; // Factorul quadratic al luminii

void main()
{
    // Calcul?m distan?a de la fragment la sursa de lumin?
    float distance = length(lightPos - FragPos);
    
    // Calcul?m factorul de atenuare pe baza distan?ei
    float attenuation = 1.0 / (constant + linear * distance + quadratic * (distance * distance));
    
    // Definim culoarea final? a luminii
    vec3 ambient = 0.1 * lightColor; // Lumin? ambiental?
    vec3 diffuse = max(dot(normalize(FragPos - viewPos), normalize(lightPos - FragPos)), 0.0) * lightColor; // Lumin? difuz?
    
    // Calcul?m rezultatul final
    vec3 result = (ambient + diffuse) * attenuation;
    FragColor = vec4(result, 1.0); // Set?m culoarea final?
}
