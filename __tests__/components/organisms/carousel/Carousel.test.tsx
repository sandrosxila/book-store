import Carousel from '@/components/organisms/carousel/Carousel';
import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

describe('Carousel', () => {
    it('should change slide after 3 seconds', async () => {
        render(
            <Carousel>
                <div>Slide 1</div>
                <div>Slide 2</div>
                <div>Slide 3</div>
            </Carousel>
        );

        const slide1 = screen.getByLabelText('carousel item 1');
        const slide2 = screen.getByRole('tab', { name: 'carousel item 2' });

        expect(slide1).toHaveAttribute('aria-selected', 'true');
        expect(slide2).toHaveAttribute('aria-selected', 'false');
    
        await act(async () => new Promise(resolve => setTimeout(resolve, 3000)));

        expect(slide1).toHaveAttribute('aria-selected', 'false');
        expect(slide2).toHaveAttribute('aria-selected', 'true');
    });
});