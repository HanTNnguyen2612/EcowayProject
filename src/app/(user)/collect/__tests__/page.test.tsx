import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import CollectPage from '../page';

// Mock NextUI components
jest.mock('@nextui-org/react', () => ({
  Card: ({ children, className }: any) => <div className={className}>{children}</div>,
  CardBody: ({ children, className }: any) => <div className={className}>{children}</div>,
  Input: ({ label, placeholder, type, value, onChange, isRequired, startContent, min }: any) => (
    <div>
      <label>{label}</label>
      {startContent}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={isRequired}
        min={min}
        data-testid={`input-${label.toLowerCase().replace(/\s+/g, '-')}`}
      />
    </div>
  ),
  Button: ({ children, type, color, size, className, isLoading, isDisabled, onClick }: any) => (
    <button
      type={type}
      className={className}
      disabled={isDisabled || isLoading}
      onClick={onClick}
      data-testid="submit-button"
    >
      {isLoading ? 'Đang xử lý...' : children}
    </button>
  ),
  Textarea: ({ label, placeholder, value, onChange, minRows, isRequired }: any) => (
    <div>
      <label>{label}</label>
      <textarea
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={isRequired}
        rows={minRows}
        data-testid={`textarea-${label.toLowerCase().replace(/\s+/g, '-')}`}
      />
    </div>
  ),
}));

// Mock Lucide React icons
jest.mock('lucide-react', () => ({
  Recycle: () => <div data-testid="recycle-icon">♻️</div>,
  CheckCircle: () => <div data-testid="check-circle-icon">✓</div>,
  AlertCircle: () => <div data-testid="alert-circle-icon">⚠️</div>,
}));

describe('CollectPage', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders the collect page with all form elements', () => {
    render(<CollectPage />);
    
    expect(screen.getByText('Gửi điểm tái sinh')).toBeInTheDocument();
    expect(screen.getByText('Báo cáo số lượng chai nhựa bạn đã thu gom để nhận điểm thưởng')).toBeInTheDocument();
    expect(screen.getByTestId('input-số-lượng-chai-nhựa-thu-gom')).toBeInTheDocument();
    expect(screen.getByTestId('input-địa-điểm-thu-gom')).toBeInTheDocument();
    expect(screen.getByTestId('textarea-ghi-chú-thêm')).toBeInTheDocument();
    expect(screen.getByTestId('submit-button')).toBeInTheDocument();
  });

  it('calculates points correctly', () => {
    render(<CollectPage />);
    
    const bottlesInput = screen.getByTestId('input-số-lượng-chai-nhựa-thu-gom');
    fireEvent.change(bottlesInput, { target: { value: '5' } });
    
    expect(screen.getByText('Bạn sẽ nhận được: 50 điểm')).toBeInTheDocument();
  });

  it('disables submit button when required fields are empty', () => {
    render(<CollectPage />);
    
    const submitButton = screen.getByTestId('submit-button');
    expect(submitButton).toBeDisabled();
  });

  it('enables submit button when required fields are filled', () => {
    render(<CollectPage />);
    
    const bottlesInput = screen.getByTestId('input-số-lượng-chai-nhựa-thu-gom');
    const locationInput = screen.getByTestId('input-địa-điểm-thu-gom');
    
    fireEvent.change(bottlesInput, { target: { value: '5' } });
    fireEvent.change(locationInput, { target: { value: 'Hồ Chí Minh' } });
    
    const submitButton = screen.getByTestId('submit-button');
    expect(submitButton).not.toBeDisabled();
  });

  it('shows loading state when submitting', async () => {
    render(<CollectPage />);
    
    const bottlesInput = screen.getByTestId('input-số-lượng-chai-nhựa-thu-gom');
    const locationInput = screen.getByTestId('input-địa-điểm-thu-gom');
    const submitButton = screen.getByTestId('submit-button');
    
    fireEvent.change(bottlesInput, { target: { value: '5' } });
    fireEvent.change(locationInput, { target: { value: 'Hồ Chí Minh' } });
    
    fireEvent.click(submitButton);
    
    expect(screen.getByText('Đang xử lý...')).toBeInTheDocument();
  });

  it('shows success message after successful submission', async () => {
    render(<CollectPage />);
    
    const bottlesInput = screen.getByTestId('input-số-lượng-chai-nhựa-thu-gom');
    const locationInput = screen.getByTestId('input-địa-điểm-thu-gom');
    const submitButton = screen.getByTestId('submit-button');
    
    fireEvent.change(bottlesInput, { target: { value: '5' } });
    fireEvent.change(locationInput, { target: { value: 'Hồ Chí Minh' } });
    
    fireEvent.click(submitButton);
    
    await waitFor(() => {
      expect(screen.getByText('Gửi thành công!')).toBeInTheDocument();
    }, { timeout: 3000 });
  });

  it('displays information about the point system', () => {
    render(<CollectPage />);
    
    expect(screen.getByText('Thông tin về hệ thống điểm')).toBeInTheDocument();
    expect(screen.getByText('• Mỗi chai nhựa = 10 điểm')).toBeInTheDocument();
    expect(screen.getByText('• Điểm sẽ được cộng vào tài khoản trong vòng 24h')).toBeInTheDocument();
    expect(screen.getByText('• Điểm có thể đổi lấy voucher và quà tặng')).toBeInTheDocument();
    expect(screen.getByText('• Hỗ trợ tất cả loại chai nhựa mỹ phẩm')).toBeInTheDocument();
  });
});
