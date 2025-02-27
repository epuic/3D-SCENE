#version 410 core

layout (location = 0) in vec3 aPos; // Pozi?ia obiectului

uniform mat4 model;
uniform mat4 view;
uniform mat4 projection;

out vec3 FragPos; // Pozi?ia fragmetului, care va fi folosit? în fragment shader

void main()
{
    FragPos = vec3(model * vec4(aPos, 1.0)); // Calcul?m pozi?ia în coordonate mondiale
    gl_Position = projection * view * vec4(FragPos, 1.0); // Aplic?m transform?rile de camer?
}
