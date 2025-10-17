import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ContactPage from '../page';

// Mock NextUI components
jest.mock('@nextui-org/react', () => ({
  Card: ({ children, className }: any) => <div className={className}>{children}</div>,
  CardBody: ({ children, className }: any) => <div className={className}>{children}</div>,
  Input: ({ label, placeholder, type, value, onChange, isRequired }: any) => (
    <div>
      <label>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={isRequired}
        data-testid={`input-${label.toLowerCase().replace(/\s+/g, '-')}`}
      />
    </div>
  ),
  Button: ({ children, type, color, size, className, isLoading, isDisabled, onClick, as, href, target, rel }: any) => {
    if (as === 'a') {
      return (
        <a href={href} target={target} rel={rel} className={className} data-testid="google-form-link">
          {children}
        </a>
      );
    }
    return (
      <button
        type={type}
        className={className}
        disabled={isDisabled || isLoading}
        onClick={onClick}
        data-testid="submit-button"
      >
        {isLoading ? 'Đang gửi...' : children}
      </button>
    );
  },
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
  Mail: () => <div data-testid="mail-icon">📧</div>,
  Phone: () => <div data-testid="phone-icon">📞</div>,
  MapPin: () => <div data-testid="map-pin-icon">📍</div>,
  Facebook: () => <div data-testid="facebook-icon">📘</div>,
  MessageCircle: () => <div data-testid="message-circle-icon">💬</div>,
  CheckCircle: () => <div data-testid="check-circle-icon">✓</div>,
  AlertCircle: () => <div data-testid="alert-circle-icon">⚠️</div>,
}));

describe('ContactPage', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders the contact page with all sections', () => {
    render(<ContactPage />);
    
    expect(screen.getByText('Liên hệ với chúng tôi')).toBeInTheDocument();
    expect(screen.getByText('Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn')).toBeInTheDocument();
  });

  it('displays contact information', () => {
    render(<ContactPage />);
    
    expect(screen.getByText('Thông tin liên hệ')).toBeInTheDocument();
    expect(screen.getByText('Hotline')).toBeInTheDocument();
    expect(screen.getByText('1900 1234 567')).toBeInTheDocument();
    expect(screen.getByText('Email')).toBeInTheDocument();
    expect(screen.getByText('support@ecoway.com')).toBeInTheDocument();
    expect(screen.getByText('Địa chỉ')).toBeInTheDocument();
    expect(screen.getByText('Fanpage')).toBeInTheDocument();
  });

  it('renders feedback form with all fields', () => {
    render(<ContactPage />);
    
    expect(screen.getByText('Form góp ý nhanh')).toBeInTheDocument();
    expect(screen.getByTestId('input-họ-và-tên')).toBeInTheDocument();
    expect(screen.getByTestId('input-email')).toBeInTheDocument();
    expect(screen.getByTestId('input-chủ-đề')).toBeInTheDocument();
    expect(screen.getByTestId('textarea-nội-dung')).toBeInTheDocument();
    expect(screen.getByTestId('submit-button')).toBeInTheDocument();
  });

  it('disables submit button when required fields are empty', () => {
    render(<ContactPage />);
    
    const submitButton = screen.getByTestId('submit-button');
    expect(submitButton).toBeDisabled();
  });

  it('enables submit button when all required fields are filled', () => {
    render(<ContactPage />);
    
    const nameInput = screen.getByTestId('input-họ-và-tên');
    const emailInput = screen.getByTestId('input-email');
    const subjectInput = screen.getByTestId('input-chủ-đề');
    const messageTextarea = screen.getByTestId('textarea-nội-dung');
    
    fireEvent.change(nameInput, { target: { value: 'Nguyễn Văn A' } });
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(subjectInput, { target: { value: 'Test Subject' } });
    fireEvent.change(messageTextarea, { target: { value: 'Test message' } });
    
    const submitButton = screen.getByTestId('submit-button');
    expect(submitButton).not.toBeDisabled();
  });

  it('shows loading state when submitting feedback', async () => {
    render(<ContactPage />);
    
    const nameInput = screen.getByTestId('input-họ-và-tên');
    const emailInput = screen.getByTestId('input-email');
    const subjectInput = screen.getByTestId('input-chủ-đề');
    const messageTextarea = screen.getByTestId('textarea-nội-dung');
    const submitButton = screen.getByTestId('submit-button');
    
    fireEvent.change(nameInput, { target: { value: 'Nguyễn Văn A' } });
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(subjectInput, { target: { value: 'Test Subject' } });
    fireEvent.change(messageTextarea, { target: { value: 'Test message' } });
    
    fireEvent.click(submitButton);
    
    expect(screen.getByText('Đang gửi...')).toBeInTheDocument();
  });

  it('shows success message after successful feedback submission', async () => {
    render(<ContactPage />);
    
    const nameInput = screen.getByTestId('input-họ-và-tên');
    const emailInput = screen.getByTestId('input-email');
    const subjectInput = screen.getByTestId('input-chủ-đề');
    const messageTextarea = screen.getByTestId('textarea-nội-dung');
    const submitButton = screen.getByTestId('submit-button');
    
    fireEvent.change(nameInput, { target: { value: 'Nguyễn Văn A' } });
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(subjectInput, { target: { value: 'Test Subject' } });
    fireEvent.change(messageTextarea, { target: { value: 'Test message' } });
    
    fireEvent.click(submitButton);
    
    await waitFor(() => {
      expect(screen.getByText('Gửi thành công!')).toBeInTheDocument();
    }, { timeout: 3000 });
  });

  it('displays Google Form link', () => {
    render(<ContactPage />);
    
    expect(screen.getByText('Form Google')).toBeInTheDocument();
    expect(screen.getByTestId('google-form-link')).toBeInTheDocument();
    expect(screen.getByText('Mở Google Form')).toBeInTheDocument();
  });

  it('displays FAQ section', () => {
    render(<ContactPage />);
    
    expect(screen.getByText('Câu hỏi thường gặp')).toBeInTheDocument();
    expect(screen.getByText('Làm thế nào để tích điểm?')).toBeInTheDocument();
    expect(screen.getByText('Điểm có hạn sử dụng không?')).toBeInTheDocument();
    expect(screen.getByText('Có những loại quà tặng nào?')).toBeInTheDocument();
    expect(screen.getByText('Làm sao để tìm trạm ECOWAY?')).toBeInTheDocument();
  });
});
