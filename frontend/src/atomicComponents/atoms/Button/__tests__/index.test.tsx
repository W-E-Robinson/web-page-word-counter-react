import { fireEvent, render, screen } from '@testing-library/react';

import Button from '../index';

describe('Button testing', () => {
    const mockOnClick = jest.fn();

    const mockProps = {
        id: 'mock id',
        label: 'mock label',
        variant: 'contained' as const,
        disabled: false,
        onClick: mockOnClick,
    };

    it('should render the label', () => {
        render(<Button
            id={mockProps.id}
            label={mockProps.label}
            variant={mockProps.variant}
            disabled={mockProps.disabled}
            onClick={mockProps.onClick}
        />);

        expect(screen.getByText('mock label')).toBeInTheDocument();
    });
    it('should call the onClick mock function', () => {
        render(<Button
            id={mockProps.id}
            label={mockProps.label}
            variant={mockProps.variant}
            disabled={mockProps.disabled}
            onClick={mockProps.onClick}
        />);

        fireEvent.click(screen.getByText('mock label'));
        expect(mockOnClick).toHaveBeenCalledTimes(1);
    });
    it('should render the button disabled when prop is given', () => {
        render(<Button
            id={mockProps.id}
            label={mockProps.label}
            variant={mockProps.variant}
            disabled={true}
            onClick={mockProps.onClick}
        />);

        expect(screen.getByText('mock label').closest('button')).toBeDisabled();
    });
});
