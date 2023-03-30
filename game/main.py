import pygame

# Initialize Pygame
pygame.init()

# Set up the display
screen = pygame.display.set_mode((640, 480))

# Set up the background
background = pygame.Surface(screen.get_size())
background.fill((128, 0, 128))

# Main game loop
running = True
while running:
    # Handle events
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False

    # Draw the background
    screen.blit(background, (0, 0))

    # Update the display
    pygame.display.flip()

# Quit Pygame
pygame.quit()