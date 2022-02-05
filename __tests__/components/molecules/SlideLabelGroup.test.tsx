import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import SlideLabelGroup from '@/components/molecules/slide-label-group/SlideLabelGroup';

describe('SlideLabelGroup', () => {
    it('should change active element on click', () => {
        const mockSetPosition = jest.fn<void, [number]>();
        render(
            <SlideLabelGroup
                positionSetter={ mockSetPosition }
                numberOfSlideLabels={ 3 }
                activePosition={ 0 }
            />
        );
        const btn = screen.getByRole('button', { name: /select 3rd/i });

        user.click(btn);
        
        expect(mockSetPosition).toHaveBeenCalledWith(2);
    });
});